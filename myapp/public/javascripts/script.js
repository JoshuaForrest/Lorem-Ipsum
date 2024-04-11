document.getElementById('expandButton').addEventListener('click', function() {
    const expandableSection = document.getElementById('expandableSection');
    if (expandableSection.classList.contains('hidden')) {
        expandableSection.classList.remove('hidden');
        document.getElementById('expandButton').textContent = 'Show Less Sass';
    } else {
        expandableSection.classList.add('hidden');
        document.getElementById('expandButton').textContent = 'Show Some Sass';
    }
});