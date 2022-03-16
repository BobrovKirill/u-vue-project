export default {
	mounted(el, binding) {
		console.log(binding)
		console.log(binding.value.page)
		const options = {
			    rootMargin: '0px',
			    threshold: 1.0,
			  };
			  const callback = (entries, observer) => {
			    if (entries[0].isIntersecting && binding.value.page < binding.value.totalPages) {
			      binding.value.loaderMorePosts()
			    }
			  };
			  const observer = new IntersectionObserver(callback, options);
			  observer.observe(el);
	},
	name: 'intersection'
}