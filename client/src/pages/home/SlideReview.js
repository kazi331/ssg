import React from 'react';

const SlideReview = ({r}) => {
    const starts = [1,2,3,4,5]
    return <div className="card max-w-3xl  mt-8  mx-auto bg-base-100 shadow-xl">
    <div className="flex gap-4 flex-wrap  items-center bg-base-200 p-4">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://api.lorem.space/image/face?hash=47449"
            alt=""
            />
        </div>
      </div>
      <h4>{r.name}</h4>
      <div className="rating">
        {
          starts.map((s,i)=> <input key={i}
          type="radio"
          name="rating-4"
          className="w-5 mask mask-star-2 bg-green-500"
          /> )
        }
      </div>
  
      
    </div>
    <div className="card-body">
     <p className="text-gray-600">
       {r.des}
      </p>
      <div className="card-actions gap-4 justify-between items-center">
        <div className="flex gap-4 flex-wrap">
         {
           r.badge.map((b, i)=> 
           <div key={i} className="badge bg-green-100 text-green-500 border-green-600 gap-1 p-3 pl-2">
           <span className="text-2xl bg-white rounded-full w-5 h-5 flex items-center justify-center">+</span>
             {b}
         </div> )
         }
          
        </div>
          <div className="text-xs text-gray-500">added 2 months ago</div>
      </div>
    </div>
  </div>
};

export default SlideReview;