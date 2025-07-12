import React from "react";

const Login = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('./src/assets/background-image.png')` }}
      />

      {/* Logo */}
      <div className="absolute top-8 left-[120px] flex items-center gap-[4px] w-[134.42px] h-[32px]">
          {/* Logo Icon */}
      <div className="w-[32px] h-[32px] bg-[#F0FDFA] border border-[#F0FDFA] rounded-[10.67px] flex items-center justify-center p-[6.67px]">
        <img
          src="./src/assets/logogram.svg" // or .png if you have a static image
          alt="Logo Icon"
          className="w-[21.33px] h-[21.33px]"
        />
      </div>

      {/* Connectiva Text (was Vector box) */}
      <div className="w-[98.42px] h-[13.61px] text-[#d9e9e8] font-bold text-sm leading-[13.61px] tracking-wide">
        Connectiva
      </div>
      </div>
      {/* Login Form */}
      <div className="absolute left-1/2 top-[230px] -translate-x-1/2 -translate-y-[calc(50%-49.5px)] w-[460px] p-[36px_32px_]  gap-[40px] h-[448px] bg-white/10 border border-white/20 backdrop-blur-[50px] rounded-[20px] flex flex-col items-start">
        {/* Title */}
        <h2 className="text-white text-[28px] leading-[36px] font-semibold w-full text-center tracking-[-0.02em]">
          Welcome back.
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-[40px] w-full"> 
          {/* Email Field */}
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#FAFAFA] text-[16px] font-normal">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full h-[44px] px-4 bg-white/10 border border-white/20 text-white placeholder:text-[#ccc] rounded-[8px] outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[#FAFAFA] text-[16px] font-normal">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full h-[44px] px-4 bg-white/10 border border-white/20 text-white placeholder:text-[#ccc] rounded-[8px] outline-none"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[44px] bg-gradient-to-b from-[#BEF264] to-[#84CC16] text-[#292929] font-semibold text-[16px] leading-[28px] tracking-[-0.02em] rounded-[8px] border border-[#BEF264]"
          >
            Login
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-[#EBEBEB] text-[16px] leading-[24px] pb-[16px] w-full text-center tracking-[-0.02em]">
          Don’t have an account? <span className="underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
