jQuery(document).ready(function ($) {
    // Script for generating Lorem Ipsum text
    function wpGenerateLoremIpsumText() {
        const wordCount = $("#wordCount").val();
        const paragraphCount = $("#paragraphCount").val();
        const startWithLorem = $("#startWithLorem").prop("checked");
        const words = "lorem ipsum dolor sit amet consectetur adipiscing elit".split(' ');

        let loremIpsumText = "";

        for (let p = 0; p < paragraphCount; p++) {
            let paragraph = (startWithLorem && p === 0) ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " : "";
            for (let i = 0; i < wordCount; i++) {
                const randomWord = words[Math.floor(Math.random() * words.length)];
                paragraph += randomWord + ' ';
            }

            paragraph = paragraph.charAt(0).toUpperCase() + $.trim(paragraph.slice(1)) + '. ';
            loremIpsumText += '<p>' + paragraph + '</p>';
        }

        $("#generated-lorem-ipsum").html(loremIpsumText);
    }

    // Event listeners for the buttons on the page (generate and copy)
    $("#generate-lorem-ipsum-btn").on("click", function(event) {
        event.preventDefault();
        wpGenerateLoremIpsumText();
    });

	// Function to copy the generated content to clipboard
    function wpCopyLoremIpsumToClipboard() {
        // Get the button, popup overlay and popup message elements
		var button = $(this);
		var popupOverlay = button.parent().find('.popup-overlay');
		var popupMessage = popupOverlay.find('.popup-message');

		// Create a new textarea element and give it id='temp_element'
		var textarea = $('<textarea id="temp_element"></textarea>');

		// Optional step to make less noise on the page, if any!
		textarea.css({height: 0});

		// Now append it to your page somewhere, I chose <body>
		$('body').append(textarea);

		// Give our textarea a value of whatever inside the <code> element
		textarea.val(button.parent().find('#generated-lorem-ipsum').text());

		// Now copy whatever inside the textarea to clipboard
		textarea.select();
		document.execCommand('copy');
		//navigator.clipboard.writeText(textarea.val());

		// Remove the textarea
		textarea.remove();

		// Display the popup overlay
		popupOverlay.fadeIn(300, function() {
			setTimeout(function() {
				popupOverlay.fadeOut(300);
				popupOverlay.css('display', 'flex');
			}, 900);
		});
    }

    // Add event listener to the copy password button
    $("#lorem-ipsum-copy-btn").on("click", wpCopyLoremIpsumToClipboard);

});
