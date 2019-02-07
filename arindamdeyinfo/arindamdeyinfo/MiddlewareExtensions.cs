﻿using Microsoft.AspNetCore.Builder;

namespace ArindamdeyInfo
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder AppMiddleWare(this IApplicationBuilder builder)
        {
            RequestCultureMiddleWare(builder);
            return builder;
        }
        public static void RequestCultureMiddleWare(this IApplicationBuilder builder)
        {
            builder.UseMiddleware<RequestCultureMiddleware>();
        }
    }
}
