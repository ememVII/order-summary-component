import React, { useState } from 'react'
import { bgDesktop, hero } from '../../Utilities/imgs'
import { motion } from 'framer-motion'
import Plans from '../Plans/Plans'
import SinglePlan from '../Plans/SinglePlan'

export default function Card() {
  const [showBox, setShowBox] = useState(false)

  const [planData, setPlanData] = useState({
    plan: 'Annual Plan',
    price: '$59.99/year',
  })

  const handleShowBox = () => {
    setShowBox(show => !show)
  }

  const handlePlanChange = (plan, price) => {
    const planData = {
      plan: plan,
      price: price,
    }
    setPlanData(planData)
    setShowBox(false)
  }

  return (
    <>
      <div
        className="content"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      >
        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={hero} alt="music illustration" className="rounded-t-xl" />

          <div className="cardDetails">
            <h1 className="font-bold text-xl">Order Summary</h1>
            <p className="cardDescription">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            <SinglePlan
              plan={planData.plan}
              price={planData.price}
              onShowBox={handleShowBox}
              changePlanHandler={handlePlanChange}
            />

            <div className="btns">
              <motion.button
                className="btnProceed"
                whileTap={{ scale: 0.95 }}
              >
                Proceed to Payment
              </motion.button>
              <button className="btnCancel">
                Cancel Order
              </button>
            </div>

            <Plans
              isShown={showBox}
              onShowBox={handleShowBox}
              changePlanHandler={handlePlanChange}
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}
