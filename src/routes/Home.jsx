import React from 'react';
// import { useSelector } from 'react-redux';

const HomeScreen = () => {
  // const { rockets } = useSelector((state) => state.rockets);
  // const rocketList = Object.keys(rockets);
  console.log('Home');

  return (
    <section>
      <div className="container">
        { /*
          rocketList ? rocketList.map((item) => (
            <Card
              key={item}
              id={item}
              image={rockets[item].imagen}
              description={rockets[item].description}
              reserved={rockets[item].reserved}
              title={rockets[item].title}
            />
          )) : <div className="text-center">No Rockets Availables</div>
          */}
      </div>
    </section>
  );
};

export default HomeScreen;
