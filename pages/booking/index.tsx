import BookingForm from "../../components/booking/BookingForm";
import CancellationPolicy from "../../components/booking/CancellationPolicy";
import OrderSummary from "../../components/booking/OrderSummary";

export default function BookingPage()  {
    const bookingDetails = {
        propertyName: "villa Arrecife Beach House",
        price: 7500,
        bookingFree: 65,
        totalNights: 3,
        startDate: "24 August 2024",
    }

    return (
        <div className="container mx-auto p-6">
            <div className="grid gird-cols-2 gap-6">
                <BookingForm/>
                <CancellationPolicy/>
                <OrderSummary bookingDetails={bookingDetails} />
            </div>

        </div>
    )
}