/* eslint-disable react/prop-types */

const Slide = ({image, text}) => {
    return (
        <div className="w-full bg-center rounded-2xl bg-cover h-[38rem]"
        style={{
            backgroundImage: `url(${image})`
        }}>
            <p className="text-5xl font-black text-center py-5">
                {text}
            </p>
           
        </div>
    );
};

export default Slide;