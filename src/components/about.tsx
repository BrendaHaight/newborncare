const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-pinkish p-4">
      <h1 className="text-4xl font-bold mb-6 text-yellowish">About Elaine</h1>
      <p className="text-yellowish text-center max-w-2xl mb-6">
        Elaine is a dedicated newborn care specialist, passionate about
        providing personalized support to new parents. As a self-employed
        professional, Elaine has helped countless families navigate the
        challenges of early parenthood, offering expert advice and care tailored
        to the unique needs of each family.
      </p>
      <p className="text-tealish text-center max-w-2xl">
        With years of experience and a commitment to helping parents feel
        confident and well-supported, Elaine ensures that every baby gets the
        care they deserve, while parents receive guidance and peace of mind
        during this special time.
      </p>
    </div>
  );
};

export default About;
