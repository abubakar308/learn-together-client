/* eslint-disable react/prop-types */

const Slide = ({image, text}) => {
    return (
        <div className="md:w-full bg-center rounded-2xl bg-cover h-[20rem] md:h-[36rem]"
        style={{
            backgroundImage: `url(${image})`
        }}>
            <p className=" text-2xl md:text-5xl font-black text-center py-5">
                {text}
            </p>
           
        </div>
    );
};

export default Slide;