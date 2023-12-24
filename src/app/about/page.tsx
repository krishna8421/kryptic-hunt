import React from "react";

const AboutPage = () => {
  return (
    <div className=" bg-red m-auto my-20 flex max-w-2xl flex-col gap-12 px-4">
      <h1 className="pl-4 text-4xl font-semibold">About</h1>
      <div className="relative flex flex-col gap-12 overflow-x-auto shadow-md">
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            Welcome to the MLSA, KIIT Kryptic Hunt!
          </h1>
          <span className="text-sm text-gray-400">
            Gear up for a mental marathon crafted exclusively for the ingenious
            minds of KIIT students. MLSA, KIIT Chapter proudly presents the
            Kryptic Hunt—a 48-hour individual challenge that unveils Kryptic
            mysteries, utilizing tools like ciphers, steganography, and more,
            without the need for prior coding skills.
          </span>
        </div>
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            What is the Kryptic Hunt?
          </h1>
          <span className="text-sm text-gray-400">
            Prepare to decode, decipher, and unravel as the Kryptic Hunt
            immerses you in a world of enigmatic puzzles. Tailored for the
            curious minds at KIIT, this event is your chance to explore the art
            of code-breaking and puzzle-solving.
          </span>
        </div>
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            Who Can Participate?
          </h1>
          <span className="text-sm text-gray-400">
            Exclusively for current KIIT students, the Kryptic Hunt beckons
            those intrigued by Kryptic challenges, regardless of coding
            background. Whether you&apos;re well-versed in ciphers and
            steganography or eager to explore these tools for the first time,
            this adventure is open to all.
          </span>
        </div>
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            Why Join the Kryptic Hunt?
          </h1>
          <span className="text-sm text-gray-400">
            Mental Agility: Exercise your mind and enhance problem-solving
            skills. Solo Challenge: Embark on an individual quest tailored for
            your intellect. Recognition and Rewards: Win exciting prizes and
            earn acclaim among KIIT peers. Explore Kryptic Tools: Discover
            ciphers, steganography, and more.
          </span>
        </div>
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            How Does It Work?
          </h1>
          <span className="text-sm text-gray-400">
            Stay tuned for registration details and updates on clue releases.
            The 48-hour hunt will present a series of mind-bending challenges
            across accessible platforms for KIIT students.
          </span>
        </div>
        <div>
          <h1 className="text-bold py-4 text-xl font-semibold">
            Join Us in Unveiling the Secrets!
          </h1>
          <span className="text-sm text-gray-400">
            The Kryptic Hunt promises an exhilarating 48-hour journey where your
            prowess in decoding mysteries using ciphers, steganography, and more
            will shine. Ready to embrace this challenge? Prepare for a
            captivating exploration of puzzles and hidden messages where your
            intellect reigns supreme!
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
