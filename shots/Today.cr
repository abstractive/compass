class Today < Artillery::Shot

  vector "/today"

  def get
    success "Today"
  end

end