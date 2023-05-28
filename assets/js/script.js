jQuery(document).ready(function ($) {
    // Script for generating Lorem Ipsum text
    function generateLoremIpsumText() {
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

        $("#generatedLoremIpsum").html(loremIpsumText);
    }

    // Event listeners for the buttons on the page (generate and copy)
    $("#generate-btn").on("click", function(event) {
        event.preventDefault();
        generateLoremIpsumText();
    });

	// Function to copy the generated content to clipboard
    function copyToClipboard() {
        const generatedContent = $(".generatedContent").text();
        const textarea = $("<textarea></textarea>");

        textarea.text(generatedContent);
        $("body").append(textarea);
        textarea.select();

        document.execCommand("copy");
        textarea.remove();
    }

    // Add event listener to the copy password button
    $("#copy-btn").on("click", copyToClipboard);

});
