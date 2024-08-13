export default function MealPage({ params }) {
  return (
    <>
    <h1>Meal Details</h1>
    <p>{params.mealSlug}</p>
    </>
  )
}