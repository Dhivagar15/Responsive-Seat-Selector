const seats = document.querySelectorAll('.seat');
const selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('occupied')) {
            return;
        }

        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            selectedSeats.splice(selectedSeats.indexOf(seat), 1);
        } else {
            seat.classList.add('selected');
            selectedSeats.push(seat);
        }

        updateSelectedSeats();
    });
});

function updateSelectedSeats() {
    const selectedSeatsText = selectedSeats.map(seat => seat.textContent).join(', ');
    console.log('Selected seats:', selectedSeatsText);
}