'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition, useState } from 'react';
import { useSession } from 'next-auth/react';

import { settings } from '@/actions/settings';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SettingsSchema } from '@/schemas';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { FormSuccess } from '@/components/FormSuccess';
import { FormError } from '@/components/FormError';

const SettingsPage = () => {
	const user = useCurrentUser();

	const [error, setError] = useState<string | undefined>('');
	const [success, setSuccess] = useState<string | undefined>('');
	const { update } = useSession();
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof SettingsSchema>>({
		resolver: zodResolver(SettingsSchema),
		defaultValues: {
			name: user?.name || undefined,
			email: user?.email || undefined,
		},
	});

	const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
		startTransition(() => {
			settings(values)
				.then((data) => {
					if (data.error) {
						setError(data.error);
					}

					if (data.success) {
						update();
						setSuccess(data.success);
					}
				})
				.catch(() => setError('Something went wrong!'));
		});
	};

	return (
		<Card className='w-[600px]'>
			<CardHeader>
				<p className='text-2xl font-semibold text-center'>Settings</p>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						className='space-y-6'
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<div className='space-y-4'>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder='John Doe'
												disabled={isPending}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												{...field}
												placeholder='johndoe@example.com'
												disabled={isPending}
												type='email'
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<FormSuccess message={success} />
						<FormError message={error} />
						<Button
							disabled={isPending}
							type='submit'
						>
							Save
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default SettingsPage;
