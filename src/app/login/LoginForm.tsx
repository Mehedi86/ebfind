'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, Lock, LogIn, Mail } from 'lucide-react'
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import { Inputs, LoginFormProps } from '@/types/common';

export default function LoginForm({ onSubmit }: LoginFormProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, formState: { errors } } = useFormContext<Inputs>();

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-2">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            {...register("email", { required: true })}
                            id="email"
                            type="email"
                            className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            {...register("password", { required: true })}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="block w-full pl-10 pr-12 py-3 border border-white/20 rounded bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-red-400 transition-colors" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-red-400 transition-colors" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-400 focus:ring-offset-0 cursor-pointer"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300 cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link
                            href="/forgot-password"
                            className="font-medium text-red-400 hover:text-red-300 transition-colors"
                        >
                            Forgot password?
                        </Link>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded bg-red-500 hover:bg-red-600 text-white font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-red-500/50"
                >
                    {isLoading ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Signing in...</span>
                        </>
                    ) : (
                        <>
                            <LogIn className="h-5 w-5" />
                            <span>Sign In</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}
