"use client"
import { Project } from "@/app/state";
import { useState } from "react";

export default function ProjetCard(projet: Project) {

  const [imageSrc, setImageSrc] = useState('/assets/lien_externe.svg');

  const handleMouseOver = () => {
      setImageSrc('/assets/lien_externe_hover.svg');
  };

  const handleMouseOut = () => {
      setImageSrc('/assets/lien_externe.svg');
  };


  return (
    <div className="mb-[20px]">
      <div className="flex items-center">
        <div className="pl-3">
          <div className="flex items-center gap-2">
            <a className='flex items-start gap-1 w-fit' href={projet.url_git} target="_blank" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <h2>{projet.title}</h2>
              <img className='h-[16px]' src={imageSrc} style={{filter: "invert(35%) sepia(70%) saturate(396%) hue-rotate(148deg) brightness(99%) contrast(94%)"}}/>
            </a>
            {projet.url_web ? 
              <a target="_blank" href={projet.url_web}>
                <img className='h-[22px]' src={'/assets/browser.svg'} style={{filter: "invert(35%) sepia(70%) saturate(396%) hue-rotate(148deg) brightness(99%) contrast(94%)"}}/>
              </a> 
            : ""}
            {projet.url_yt ? 
              <a target="_blank" href={projet.url_yt}>
                <img className='h-[22px]' src={'/assets/youtube.svg'} style={{filter: "invert(35%) sepia(70%) saturate(396%) hue-rotate(148deg) brightness(99%) contrast(94%)"}}/>
              </a> 
            : ""}
          </div>
          <h3>{projet.spitch}</h3>
          <div className="flex custom:flex-row flex-col gap-2 py-3 items-center">
            <img
              className="custom:w-[190px] custom:h-[100px]"
              src={projet.screenshot}
            ></img>
            <p>{projet.content}</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-3 mt-2">
        {projet.skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill, index) => (
            <li
              key={index}
              className="bg-item-bg-color rounded-[10px] py-[3px] px-4"
            >
              <a href={skill.href} target="_blank">
                {skill.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
