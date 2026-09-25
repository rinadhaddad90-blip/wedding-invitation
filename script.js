document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById(
        "openInvitationButton"
    );

    const invitationContent = document.getElementById(
        "invitationContent"
    );


    if (!openButton || !invitationContent) {
        console.error("Invitation elements were not found.");
        return;
    }


    openButton.addEventListener("click", function () {

        invitationContent.classList.add("show");

        openButton.textContent = "Invitation Opened";
        openButton.disabled = true;

        setTimeout(function () {
            invitationContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 200);

    });


    startCountdown();

});


function startCountdown() {

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    // ينتهي العداد عند الساعة 12:00 بالليل
    // مع بداية يوم 3 أكتوبر 2026
    const weddingDate = new Date(
        "2026-10-03T00:00:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();
        const difference = weddingDate - now;


        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

            return;
        }


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );


        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        daysElement.textContent = String(days).padStart(2, "0");
        hoursElement.textContent = String(hours).padStart(2, "0");
        minutesElement.textContent =
            String(minutes).padStart(2, "0");
        secondsElement.textContent =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);

}
