import React from 'react'
import { musicIcon } from '../../Utilities/imgs'

export default function SinglePlan({
  plan,
  price,
  choose,
  onShowBox,
  changePlanHandler,
}) {
  return (
    <div className="plan">
      <div className="planContent">
        <img src={musicIcon} alt="Music Icon" className="h-8" />
        <div className="planOption">
          <h6 className="font-extrabold">{plan}</h6>
          <span className="text-desaturated-blue font-normal">{price}</span>
        </div>
      </div>

      {choose ? (
        <button
          className="btnPlan"
          onClick={() => changePlanHandler(plan, price)}
        >
          Choose
        </button>
      ) : (
        <button
          className="btnPlan"
          onClick={onShowBox}
        >
          Change
        </button>
      )}
    </div>
  )
}
