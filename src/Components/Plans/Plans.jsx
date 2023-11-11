import React from 'react'
import SinglePlan from './SinglePlan'
import { motion } from 'framer-motion'

export default function Plans({ isShown, onShowBox, changePlanHandler }) {
  return (
    <>
      {isShown && (
        <div className="allPlans">
          <SinglePlan
            plan="Monthly Plan"
            price="$16.99/year"
            changePlanHandler={changePlanHandler}
            choose
          />
          <SinglePlan
            plan="Quarter Plan"
            price="$37.99/year"
            changePlanHandler={changePlanHandler}
            choose
          />
          <SinglePlan
            plan="Annual Plan"
            price="$59.99/year"
            changePlanHandler={changePlanHandler}
            choose
          />

          <motion.button
            onClick={onShowBox}
            className="btnBack"
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
        </div>
      )}
    </>
  )
}
