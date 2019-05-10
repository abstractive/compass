module Compass
  module Participant
    class Authenticate

      vector :post, "/participant/authenticate"

      def post
        success({ success: true }.to_json)
      end

    end
  end
end
