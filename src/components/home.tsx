// import ReactCurvedText from "react-curved-text";
import Navbar from "./navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-pinkish bg-fullBackground-jpg bg-no-repeat bg-[length:100%_auto]  flex flex-col items-center justify-start pt-[80px]">
        {/* <ReactCurvedText
          width={500}
          height={290}
          cx={250}
          cy={200}
          rx={200} // Adjust to control curve width
          ry={100} // Adjust to control curve height
          startOffset={0} // Controls starting point of text on the curve
          reversed={true}
          text="Welcome to Elaine's space"
          textProps={{
            style: {
              fontSize: 40,
              fill: "#80aeba",
              fontFamily: "'Soulmate', cursive",
            },
          }} // Customize text styles
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        /> */}
      </div>
    </div>
  );
}

export default Home;
