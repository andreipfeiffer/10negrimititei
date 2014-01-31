<?php
	require_once('includes/_config.php');
	require_once('includes/_db.php');

	$item = $_GET['item'];
	$pageTitle = $item . ' - ' . $TITLE;
	$content = array_key_exists($item, $details) ? $details[$item] : NULL;

	require_once('includes/views/header.php');
?>

	<section>

		<?php if ( $content )  { ?>

			<h1><?php echo $item;?></h1>
			<p><?php echo $content['textIntro'];?></p>
			<p><?php echo $content['textDescription'];?></p>

			<ul id="details-slideshow" class="is-js-hidden">
				<?php
					foreach ($content['images'] as $key => $img) {
						$css = ($key > 0) ? 'is-js-shown' : '';
						echo '<li class="'.$css.'">
							<div class="image-wrapper">
								<img src="assets/images/'.$content['imagesFolder'].'/'.$img->name.'" class="img-responsive" alt="" />
								<p class="caption">'.$img->caption.'</p>
							</div>
						</li>';
					}
				?>
			</ul>

		<?php } ?>
	</section>

<?php
	require_once('includes/views/footer.php');
?>
