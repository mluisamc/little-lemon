import CustomersSay from './CustomersSay';

export default function Testimonials() {
    return (
        <div className='testimonials-section'>
            <CustomersSay name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
            <CustomersSay name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <CustomersSay name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
        </div>
    );
}