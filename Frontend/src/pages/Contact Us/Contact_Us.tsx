// import Contact_US_component from "../../components/Contact_Us_Component/Contact_US_component";

// const Contact_Us = () => {
//   return (
//     <div className="relative min-h-screen w-full bg-[#F9F6F1] flex items-center justify-center font-open-sans">
//       <div className="relative mx-auto flex flex-col lg:flex-row w-full max-w-7xl items-stretch px-6 py-12 gap-8">
//         {/* LEFT SIDE */}
//         <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 text-[#1A1A1A]">
//           <h2 className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
//             Do you have a question? <br /> We’re here to help.
//           </h2>

//           <div className="flex flex-col gap-6 text-lg lg:text-xl">
//             <div className="flex items-start gap-3">
//               <span className="text-2xl">📍</span>
//               <span>52, Jyoti Niwas College Road, Koramangala, Bangalore South, Bangalore</span>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="text-2xl">✉️</span>
//               <span>help@v18hub.com</span>
//             </div>

//             {/* <div className="flex items-center gap-3">
//               <span className="text-2xl">📞</span>
//               <span>1-833-374-4736</span>
//             </div> */}
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex justify-center w-full lg:w-1/2 px-4">
//           <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
//             <Contact_US_component />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact_Us;


// import Contact_US_component from "../../components/Contact_Us_Component/Contact_US_component";

const Contact_Us = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#F6F5ED] flex items-center justify-center font-open-sans px-6">
      
      {/* Centered Content */}
      <div className="text-center max-w-4xl mx-auto">

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#294b3c] leading-tight mb-8">
          Do you have a question?<br />
          We’re here to help.
        </h2>

        {/* Email Call-to-action */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-[#294b3c] font-medium">
          Write us at: <span className="font-bold">contact@v18hub.in</span>
          {/* <a
            href="v18hub@rediffmail.com"
            className="text-[#526B61] hover:text-[#294B3C] underline underline-offset-4 transition-colors"
          >
             v18hub@rediffmail.com
          </a> */}
        </p>

      </div>
    </div>
  );
};

export default Contact_Us;
