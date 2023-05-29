<?php
function random_lorem_ipsum_generator_shortcode() {
    ob_start();
    ?>
<form id="lorem-ipsum-generator-form">
    <div class="input-number-container">
        <label for="wordCount">Word Count per Paragraph:</label>
        <input type="number" id="wordCount" name="wordCount" min="5" max="100" value="50">
    </div>

    <div class="input-number-container">
        <label for="paragraphCount">Number of Paragraphs:</label>
        <input type="number" id="paragraphCount" name="paragraphCount" min="1" max="10" value="3">
    </div>

    <div class="checkbox-container">
        <input type="checkbox" class="custom-control-input" id="startWithLorem" name="startWithLorem">
        <label for="startWithLorem" class="custom-control-label text-large">Start with 'Lorem ipsum dolor sit amet...'</label>
    </div>

    <!-- Button to generate Lorem Ipsum text -->
    <button type="button" id="generate-lorem-ipsum-btn">Generate Text</button>
</form>
<!-- Container for the generated Lorem Ipsum text -->
<div id="generated-lorem-ipsum-container">
    <button id="lorem-ipsum-copy-btn">Copy</button>
    <div class="popup-overlay">
        <div class="popup-message">Copy successful</div>
    </div>
    <p id="generated-lorem-ipsum"></p>
</div>
    <?php
    return ob_get_clean();
}
add_shortcode('random_lorem_ipsum_generator', 'random_lorem_ipsum_generator_shortcode');
