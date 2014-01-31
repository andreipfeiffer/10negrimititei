<?php
	require_once('_config.php');

	$pageTitle = $_GET['item'] . ' - ' . $TITLE;

	require_once('includes/header.php');
?>

	<section>
		<h1><?php echo $_GET['item'];?></h1>
	</section>

<?php
	require_once('includes/footer.php');
?>
