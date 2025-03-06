/**
 * @import { NextConfig } from 'next'
 */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {NextConfig} */
const nextConfig = {};

export default withVanillaExtract(nextConfig);
