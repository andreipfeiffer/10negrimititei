<?php
	require_once('includes/_config.php');
	require_once('includes/_db.php');
	require_once('includes/views/logo.php');

	$page = 'index';
	$pageTitle = $TITLE;

	require_once('includes/views/header.php');
?>

	<section class="container">
		
		<div><?= logo(300, 300)?></div>

	</section>

<?php
	require_once('includes/views/footer.php');
?>
