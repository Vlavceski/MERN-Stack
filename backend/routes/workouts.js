const express = require('express')
const router = express.Router();
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')

const  requireAuth=require('../middleware/requiredAuth')

//require auth for all workout 
router.use(requireAuth)

router.get('/', getWorkouts)

router.get('/:id',getWorkout)

router.post('/',createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router;