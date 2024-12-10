import { FC } from "react"

import data from "../data/data.json"

export const About: FC = () => {
    return (
        <div id="content__about">
            <div id="content__about__image">
                <img src="/profile.jpg" alt="Image of Jed Powell" />
            </div>
            <div id="content__about__bio">
                <h3>Before Computing</h3>
                <p>Born and raised in Cornwall UK, when not exploring the countryside and beaches I’d spend time tinkering with electronics and playing video games. After several years of working in a cleanroom facility manufacturing scientific tools for IVF treatment I decided to change up my career. Since I had been interested in computers and curious about how they work for several years it made sense to pursue computer programming.</p>

                <h3>Career Beginnings</h3>
                <p>To embark on my chosen path I enrolled onto an Access to HE course in Computing based at Truro and Penwith College. There I was introduced to Programming Fundamentals, the Software Development Lifecycle and Computer Architecture. I came away with a distinction grade, fully equipped to take it to the next level at the University of the West of England.
                    Obtaining my Bachelor’s in Computing degree taught me a wide range of skills and topics applicable to the industry. From web development and internet of things to databases and operating systems. I had a particular aptitude for C++/OOP programming and Software Engineering. Working with others on group projects proved to me how planning and working cooperatively can achieve the best results. With my prior years of work experience behind me and a solid work ethic applied to my studies, I graduated with a First grade.
                </p>
                <h3>Into Industry</h3>
            </div>
        </div>
    )
};