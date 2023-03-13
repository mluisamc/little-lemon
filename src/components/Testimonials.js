import CustomersSay from './CustomersSay';

export default function Testimonials() {
    return (
        <div className='testimonials-section'>
            <CustomersSay name="Marzio Gulzar" description="If you're a foodie, then you know the importance of finding the perfect restaurant that serves delectable meals that tantalize your taste buds. Well, look no further than Little Lemon, a restaurant that promises to offer an unforgettable dining experience."/>
            <CustomersSay name="Steven Ratislav" description="The restaurant's minimalist decor creates a cozy atmosphere that perfectly complements the food. The lighting is just right, creating a warm and inviting ambiance that makes you feel right at home."/>
            <CustomersSay name="Mariyan Shinta" description="Little Lemon prides itself on offering a wide range of dishes that cater to different tastes and preferences. Whether you're a meat lover, a vegan, or have specific dietary requirements, you'll find something to suit your taste buds here."/>
        </div>
    );
}