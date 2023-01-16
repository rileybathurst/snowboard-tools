import React, { useState, useEffect, useRef } from "react"

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [slideUp, setSlideUp] = useState(1);

  function False() {
    setIsOpen(false);
    setSlideUp(-100);
  }

  function True() {
    setIsOpen(true);
    setSlideUp(0);
  }

  if (isOpen) {
    return (
      <>
        <button onClick={False}>CL<br />SE</button>
        {/* has to be repeated to get the state here as it doesnt work nested */}
        <nav
          style={{
            transform: `translateY(${slideUp}px)`
          }}
        // ref={ref}
        >
          <Menu />
        </nav>
      </>
    );
  } else {
    return (
      <>
        <button onClick={True}>ME<br />NU</button>
        <nav
          style={{
            transform: `translateY(${slideUp}px)`
          }}
        >
          {/* ref={ref} // TODO this break things */}
          <Menu />
        </nav>
      </>
    );
  }

  // TODO: I think this is where I got stuck
  /*   useEffect(() => {
      useRef ref = ref;
      let menu_offset = ref.offsetHeight;
      setSlideUp(menu_offset);
    }, [menu]); */
}

function Menu() {
  const [slideUp, setSlideUp] = useState(0);
  return (
    <ul>
      <li>Snowboard Size Guide</li>
      <li>About</li>
    </ul>
  );
}

const HeaderSection = () => {
  return (
    <header>
      <h1>Snowboard.Tools</h1>
      <svg></svg>
      <MenuButton />
      <div className="header__background">{/* stay gold */}</div>
      <div className="adsense">
        {/* <p>Google Adsense goes here</p> */}
        {/* Big cool wave thing first which I'll then move on the page */}
        <p><a href="https://beaconsinbounds.com" target="_blank">Beacons Inbounds</a></p>
      </div>
    </header>
  )
}

export default HeaderSection
