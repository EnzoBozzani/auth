'use client';

import { CardWrapper } from '@/components/auth/CardWrapper';

export const NewVerificationForm = () => {
	return (
		<CardWrapper
			backButtonHref='/auth/login'
			backButtonLabel='Back to login'
			headerLabel='Confirming your verification'
		>
			<div className='flex items-center w-full justify-center'></div>
		</CardWrapper>
	);
};
