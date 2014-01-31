<?php
	require_once('_config.php');
	require_once('_db.php');

	$item = $_GET['item'];
	$pageTitle = $item . ' - ' . $TITLE;
	$content = $details[$item];

	require_once('includes/header.php');
?>

	<section>
		<h1><?php echo $content['title'];?></h1>
		<p><?php echo $content['textIntro'];?></p>
		<p><?php echo $content['textDescription'];?></p>

		<ul>
			<?php
				foreach ($content['images'] as $img) {
					echo '<li>
						<img src="assets/images/'.$content['imagesFolder'].'/'.$img->name.'" alt="" />
						<p>'.$img->caption.'</p>
					</li>';
				}
			?>
		</ul>
	</section>

<?php
	require_once('includes/footer.php');
?>
