import ScrollingText from "./scrollingText";

export default function Info() {
    return (
        <div className="text-white flex flex-col items-center justify-center my-15  ">
            <h1 className="text-[3rem]">What I can do for you !!</h1>
            <div className=" w-1/3 mt-5 text-[#6B7280] text-center">
                <p>Over the years, I&#39;ve worked and dabbled with various technologies and design principles.
                    Thanks to my experience as both a designer and developer, I&#39;ve gained a solid understanding of the intersection between design and code.</p>
            </div>

           <ScrollingText/>

                    <button className="bg-white text-[#111827] py-5 px-10 text-[1.1rem] rounded-full hover:scale-95 transition ">Read More About Me</button>
        </div>
    );
}