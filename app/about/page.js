
import NavBar from "../navBar";
export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center">
                Welcome to our application! We are dedicated to providing you with the best experience possible. Our team works tirelessly to ensure that our platform is user-friendly, efficient, and reliable. Thank you for choosing us!
            </p>
            <NavBar/>
        </div>
    );
}