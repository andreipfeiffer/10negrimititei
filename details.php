<?php
	require_once('includes/_config.php');
	require_once('includes/_db.php');

	$item = $_GET['item'];
	$pageTitle = $item . ' - ' . $TITLE;
	$content = array_key_exists($item, $details) ? $details[$item] : NULL;

	require_once('includes/views/header.php');
?>

	<section class="container">

		<?php if ( $content )  { ?>

			<header class="b-heading">
				<h1 class="b-heading__title"><?php echo $item;?></h1>
				<strong class="b-heading__subtitle"><?php echo $content['textIntro'];?></strong>
				<p class="b-heading__descr"><?php echo $content['textDescription'];?></p>
			</header>

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

			<ul class="b-listing">
				<?php
					foreach ($content['stories'] as $key => $story) {
						echo '<li>
							<strong>'.$story->name.'</strong>
							<p>'.$story->description.'</p>
						</li>';
					}
				?>
			</ul>

		<?php } ?>
	</section>

<?php
	require_once('includes/views/footer.php');
?>
