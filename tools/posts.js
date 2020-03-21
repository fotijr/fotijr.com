function getPostsByDateDescending(pages) {
    return pages
        // filter out parent pages (non-posts) by verifying title & location in blog path
        .filter(p => p.title && p.path.indexOf('/blog/') >= 0)
        .map(p => {
            return {
                ...p,
                // adding 12 hours to avoid UTC offset changing date
                date: new Date(p.frontmatter.published).setUTCHours(12),
                description: p.frontmatter.meta.find(m => m.name === 'description').content,
                tags: p.frontmatter.meta.find(m => m.name === 'keywords').content.split(' ')
            };
        })
        // sort by published date descending
        .sort((a, b) => b.date - a.date);
}

export {
    getPostsByDateDescending
};
