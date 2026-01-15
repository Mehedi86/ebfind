'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import LoginForm from './LoginForm';
import { Inputs } from '@/types/common';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { IoLogoFacebook } from 'react-icons/io5';

export default function page() {

    const methods = useForm<Inputs>({
        mode: 'onChange', // 
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const { formState: { isValid } } = methods;
    console.log("Is Form Valid:", isValid);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('FORM DATA:', data);
    }

    return (
        <FormProvider {...methods}>
            <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-950 via-red-950/40 to-gray-950 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-125 h-125 bg-red-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-400/5 rounded-full blur-2xl" />
                <div className="max-w-md w-full space-y-8 relative z-10">
                    {/* Header */}
                    <div className="text-center pt-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                            Sign in to your account <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-500 to-red-400">continue</span>
                        </h2>
                    </div>

                    {/* Login Form Card */}
                    <div className="bg-white/10 backdrop-blur-md rounded border border-white/20 shadow-2xl p-8 sm:p-10">

                        <LoginForm onSubmit={methods.handleSubmit(onSubmit)} />
                        {/* Divider */}
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/20"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white/10 text-gray-400">Or continue with</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-white/20 rounded bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center gap-2 py-2.5 px-4 border border-white/20 rounded bg-white/5 text-white font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                <IoLogoFacebook />
                                Facebook
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-400">
                                Don&apos;t have an account?{' '}
                                <Link
                                    href="/register"
                                    className="font-medium text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-1"
                                >
                                    Sign up
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Back to Home */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="text-sm text-gray-400 hover:text-red-400 transition-colors inline-flex items-center gap-1"
                        >
                            <ArrowRight className="h-4 w-4 rotate-180" />
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}
