import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.cover} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>
      <div className={s.avatar}>
        AVA
      </div>
      <div className={s.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste maiores error? Suscipit quo, maiores dolores quidem odit ducimus nulla voluptas atque. Asperiores atque veritatis aliquid magnam incidunt enim sint ut ex repellendus fugiat maxime, ad sunt rerum accusamus. Commodi nihil non similique laborum magnam possimus. Pariatur iure culpa atque?
      </div>
      <div className={s.postsHeader}>
        My posts
        <div>
          New Post
        </div>
        <div>
          <div className={s.item}>
            Post 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fugiat ratione, deserunt delectus doloribus rerum. Veniam, facilis modi. Dolorem necessitatibus soluta a cumque eveniet nulla dolores consectetur. Quibusdam, perferendis suscipit!
          </div>
          <div className={s.item}>
            Post 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis facere ipsam blanditiis necessitatibus culpa repudiandae excepturi laboriosam temporibus, vitae tempore rerum cumque accusamus! Mollitia, suscipit exercitationem repellendus id nam nisi sapiente magni itaque facere quibusdam ut quis atque nihil, accusantium similique aspernatur corporis, quidem reiciendis ipsum adipisci voluptatem dicta. Quis?
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;