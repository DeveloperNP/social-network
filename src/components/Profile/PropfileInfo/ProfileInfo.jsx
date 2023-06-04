import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.cover} src="./images/profile_cover.jpg" alt="cover" />
      </div>
      <div className={s.descriptionBlock}>
        <div>
          <img className={s.avatar} src="./images/Nickolai_avatar.jpg" alt="AVA" />
        </div>
        <div className={s.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque. Asperiores atque veritatis aliquid magnam incidunt enim sint ut ex repellendus fugiat maxime, ad sunt rerum accusamus. Commodi nihil non similique laborum magnam possimus. Pariatur iure culpa atque?
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;