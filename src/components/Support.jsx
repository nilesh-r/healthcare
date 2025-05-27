import React from 'react';

const Support = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Support</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <div className="font-medium">How do I schedule an appointment?</div>
                <div className="text-sm text-gray-600 mt-1">Go to the Appointments section and click "New Appointment"</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="font-medium">How can I view test results?</div>
                <div className="text-sm text-gray-600 mt-1">Navigate to the Tests section to view all results</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="font-medium">How do I update patient information?</div>
                <div className="text-sm text-gray-600 mt-1">Use the patient management system in the main dashboard</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your issue..."></textarea>
              </div>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;