'use client';

import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { newVerification } from '@/actions/newVerification';
import { CardWrapper } from '@/components/auth/CardWrapper';

import { FormError } from '../FormError';
import { FormSuccess } from '../FormSuccess';

export const NewVerificationForm = () => {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const searchParams = useSearchParams();

	const token = searchParams.get('token');

	const onSubmit = useCallback(() => {
		if (success || error) return;

		if (!token) return setError('Missing token!');
		newVerification(token)
			.then((data) => {
				setSuccess(data.success);
				setError(data.error);
			})
			.catch(() => {
				setError('Something went wrong!');
			});
	}, [token, success, error]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<CardWrapper
			backButtonHref='/auth/login'
			backButtonLabel='Back to login'
			headerLabel='Confirming your verification'
		>
			<div className='flex flex-col gap-y-2 items-center w-full justify-center'>
				{!success && !error && <BeatLoader />}
				<FormSuccess message={success} />
				{!success && <FormError message={error} />}
			</div>
		</CardWrapper>
	);
};
