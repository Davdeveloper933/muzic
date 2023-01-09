export default {
	install(app, options) {

		app.config.globalProperties.$edit = function($event, current) {
			let parent = $event.target.closest('[data-editable]');
			let target = parent.querySelector('[data-edit]');

			if (parent.classList.contains('edited')) {
				parent.classList.remove('edited')
				target.contentEditable = false;
			} else {
				parent.classList.add('edited')
				target.contentEditable = true;
				target.focus();
				if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
					let range = document.createRange();
					if (target.dataset.ref) {
						let lastChild = target.querySelectorAll('p')[target.querySelectorAll('p').length - 1];
						range.selectNodeContents(lastChild);
						range.collapse(false);
						let sel = window.getSelection();
						sel.removeAllRanges();
						range.setStart(lastChild, 2)
						range.setEnd(lastChild, 2)
						sel.addRange(range);
					} else {
						range.selectNodeContents(target);
						range.collapse(false);
						let sel = window.getSelection();
						sel.removeAllRanges();
						sel.addRange(range);
					}
				} else if (typeof document.body.createTextRange != "undefined") {
					let textRange = document.body.createTextRange();
					textRange.moveToElementText(target);
					textRange.collapse(false);
					textRange.select();
				}
			}

			function closeEditor() {
				parent.classList.remove('edited');
				if (target.getElementsByTagName('br')[0]) {
					target.getElementsByTagName('br')[0].remove();
				}
				target.contentEditable = false;
			}

			document.addEventListener("click", function (e) {
				const element = e.target;
				if (!element.closest('[data-edit]') && element !== $event.target) {
					closeEditor();
				}
			});

			document.addEventListener("keydown", function (e) {
				if (e.keyCode == 27) {
					closeEditor();
				}
			});

			if (target.dataset.ref) {
				const setButton = function setButton() {
					let btn = target.querySelector('button');
					target.querySelector('p:last-child').appendChild(btn);
				}
				target.addEventListener('keypress', (e) => {
					setButton();
				})
				target.removeEventListener('keypress', setButton, true);
			}

		}

		app.config.globalProperties.$triggerLoad = function($event) {
			this.$refs.logoFile.click();
		}

		app.config.globalProperties.$changeImage = function($event) {

			const convertBase64 = (file) => {
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.readAsDataURL(file);
	
					fileReader.onload = () => {
						resolve(fileReader.result);
					};
	
					fileReader.onerror = (error) => {
						reject(error);
					};
				});
			};

			const uploadImage = async ($event) => {
				const file = $event.target.files[0];
				const base64 = await convertBase64(file);
				this.$refs.logoImg.src = base64;
			};

			uploadImage($event);
		}

	}
}