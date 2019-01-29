<?php if(Session::has('toasts')): ?>
	<!-- Messenger http://github.hubspot.com/messenger/ -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css">

	<script type="text/javascript">
		toastr.options = {
			"closeButton": true,
			"newestOnTop": true,
			"progressBar": true,
			"positionClass": "toast-top-right"
		};

		<?php $__currentLoopData = Session::get('toasts'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $toast): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
			toastr["<?php echo e($toast['level']); ?>"]("<?php echo e($toast['message']); ?>","<?php echo e($toast['title']); ?>");
		<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
	</script>
<?php endif; ?>
