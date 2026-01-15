'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, Lock, Mail, User, UserPlus } from 'lucide-react'
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import { RegisterInputs, RegisterFormProps } from '@/types/common';

export default function RegisterForm({ onSubmit }: RegisterFormProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, formState: { errors }, watch } = useFormContext<RegisterInputs>();
    const password = watch("password");

    return (
        <div>
            <form onSubmit={onSubmit} className="space-y-2">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            {...register("name", { required: true })}
                            id="name"
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                {/* Email Field */}
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
                            className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
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
                            {...register("password", { required: true, minLength: 6 })}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            className="block w-full pl-10 pr-12 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
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

                {/* Confirm Password Field */}
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            {...register("confirmPassword", { 
                                required: true,
                                validate: (value) => value === password || "Passwords do not match"
                            })}
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            className="block w-full pl-10 pr-12 py-3 border border-white/20 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400 hover:text-red-400 transition-colors" />
                            ) : (
                                <Eye className="h-5 w-5 text-gray-400 hover:text-red-400 transition-colors" />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
                    )}
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center">
                    <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-400 focus:ring-offset-0 cursor-pointer"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-300 cursor-pointer">
                        I agree to the{' '}
                        <Link
                            href="/terms"
                            className="font-medium text-red-400 hover:text-red-300 transition-colors"
                        >
                            Terms and Conditions
                        </Link>
                    </label>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-red-500/50"
                >
                    {isLoading ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Creating account...</span>
                        </>
                    ) : (
                        <>
                            <UserPlus className="h-5 w-5" />
                            <span>Sign Up</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

