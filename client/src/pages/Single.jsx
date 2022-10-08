import React from 'react';
import {Link} from "react-router-dom";

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit"/>
            </Link>
            <img src={Delete} alt="Delete"/>
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa doloribus expedita facere impedit iure mollitia nesciunt quas tenetur vero! Asperiores, commodi ea? Aliquid aut dolorum fuga iure maxime non odio sunt ut. Amet fuga fugiat officiis. Accusamus adipisci amet asperiores autem blanditiis debitis dolor dolorem eius eligendi eos, explicabo fuga, fugit harum hic in ipsum iusto maiores molestiae neque nobis, non odio odit officiis possimus praesentium provident qui repellendus saepe similique sit tempora velit veniam vero. Accusamus beatae cupiditate deleniti, dolorem ex facilis fugiat id magnam modi necessitatibus nulla officia, optio quam sunt ullam vel voluptatum. A architecto commodi consequuntur debitis deserunt dicta dolores ea facere ipsum, iure molestias placeat quibusdam rem repellat totam unde, vero voluptates? Aliquid animi aspernatur consequuntur corporis culpa ducimus eaque error esse est eum explicabo in inventore magni maiores, minima nam perferendis quae quas quasi repudiandae rerum saepe sint sit suscipit tenetur totam velit vitae. Beatae distinctio doloremque minus natus neque, quia sequi? Aperiam debitis, doloremque eaque expedita illum molestias nesciunt officiis pariatur provident qui quod reiciendis, sed sit ut, vel? Ab animi doloribus ea eveniet sed. Commodi cumque, eius eos exercitationem harum inventore ipsa iusto odit omnis possimus sed tempora unde. Blanditiis cum eligendi libero optio perspiciatis quae tempore veritatis vero! Ab beatae blanditiis commodi, error natus nulla optio provident quia quibusdam recusandae reiciendis rerum sapiente totam veniam voluptas! Architecto consequuntur corporis dignissimos excepturi exercitationem iste maxime nam nesciunt nostrum, officia officiis possimus sapiente sit! Amet at consectetur doloremque eaque hic itaque nostrum possimus saepe tempora, voluptas. Adipisci eligendi provident quidem tempora voluptas? Aliquam amet architecto debitis deserunt, dignissimos dolor, dolores, exercitationem in ipsum iste labore maiores molestiae nostrum numquam quaerat quam quod sapiente sequi voluptatibus voluptatum. Eius eligendi fuga harum nam nemo odit omnis perferendis repellat sapiente veritatis, vitae, voluptatibus voluptatum! Deserunt.
        </p>
      </div>
      <div className="menu">
        m
      </div>
    </div>
  );
};

export default Single;