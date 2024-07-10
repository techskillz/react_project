const Main = () => {
  return (
    <div className="w-full md:w-[65%] mx-auto">
      <div className="text-[55px] leading-normal  mt-20 w-full  text-center mx-auto font-bold">
        Let’s make design  <br /> fast and easy
      </div>
      <p className="mt-39 mx-auto text-[17px]   lg:w-[65%] text-center">
        The most important part of the Startup is the samples. The samples form
        a set of 25 usable pages you can use as is or you can add new blocks
        from UI Kit.
      </p>
      <div  className=" text-center justify-center w-full items-center flex gap-2 mt-8 flex-col lg:flex-row ">
        <input type="email"  placeholder=" your email"  className="text-center  rounded-full  py-2 px-8 w-full lg:w-auto"/>
        <button className="  w-full lg:w-auto rounded-full bg-[#25DAC5] py-2 px-8">send</button>
      </div>
<div className="flex items-center justify-center mt-5 text-slate-400">
   <small className="text-center "> By signing up, you agree to the Terms of Service</small> 
</div>
      
    </div>
  );
};

export default Main;
