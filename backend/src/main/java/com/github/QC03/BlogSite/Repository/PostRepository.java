package com.github.QC03.BlogSite.Repository;

import com.github.QC03.BlogSite.Domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}