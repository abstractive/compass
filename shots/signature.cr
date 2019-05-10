module Compass
  class Signature < Artillery::Shot

    vector :post, "/signature"

    def post
      success "Signature"
    end

  end
end
