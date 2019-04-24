<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Submitted data</title>
</head>
<body>
<?php print_r($_GET); ?>
<br><br>
<button onclick="goBack()">Go Back</button>
<script>
    function goBack() {
        window.history.back();
    }
</script>
</body>
</html>